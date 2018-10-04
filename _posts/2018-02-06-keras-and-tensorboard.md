---
layout: blog
title:  "Keras and Tensorboard"
date:   2018-02-06 00:0:00 +0000
disqus_identifier: 2018-02-06
author: martin
comments: true
abstract: <a href="https://keras.io/">Keras</a>, as a high-level neural networks API, tries to simplify procedure of training neural networks by introducing numerous constraints. Recently, I have stumbled upon one of them when I tried to visualize training metrics with <a href="https://www.tensorflow.org/programmers_guide/summaries_and_tensorboard" >TensoBoard</a>. Keras offers <a href="https://keras.io/callbacks/#tensorboard">TensorBoard callback</a> that is able to save and visualize graph, training and test metrics and activation histograms for different layers in model.
---

[Keras](https://keras.io/), as a high-level neural networks API, tries to simplify procedure of training neural networks by introducing numerous constraints.
Recently, I have stumbled upon one of them when I tried to visualize training metrics with [TensoBoard](https://www.tensorflow.org/programmers_guide/summaries_and_tensorboard).
Keras offers [TensorBoard callback](https://keras.io/callbacks/#tensorboard) that is able to save and visualize graph, training and test metrics and activation histograms for different layers in model.

```python
keras.callbacks.TensorBoard(log_dir='./logs', histogram_freq=0, batch_size=32, write_graph=True, write_grads=False, write_images=False, embeddings_freq=0, embeddings_layer_names=None, embeddings_metadata=None)
```

At first, it can seem sufficient, but soon you will need to visualize more or display metric names in more practical format.
Experimenting with different optimizers, learning rates and their schedules requires to see actual value of *learning rate*, however, Keras does not support visualization of learning rate out-of-the-box.

Visualized metric names are same as defined in Keras (e.g. "loss", "val_loss", "acc", "val_acc"), but it would be nice to use the power of Tensoboard and use names in hierarchical manner (e.g. ("train/loss", "val/loss", "train/acc", "val/acc"). TensorBoard can then group metrics to logical cells and generated visualizations become easier to read.

To solve both issues we will use [`tf.summary`](https://www.tensorflow.org/api_docs/python/tf/summary) module and [`tf.Session`](https://www.tensorflow.org/api_docs/python/tf/Session) class directly.

## Add learning rate to Tensorboard
First, we need to define [placeholder](https://www.tensorflow.org/api_docs/python/tf/placeholder) that will receive learning rate value and then pass it to [`tf.summary.scalar`](https://www.tensorflow.org/api_docs/python/tf/summary/scalar).
For now, we do not want to define more metrics so we just use apply [Tensorflow operation](https://www.tensorflow.org/api_docs/python/tf/Operation) [`tf.summary.merge_all`](https://www.tensorflow.org/api_docs/python/tf/summary/merge_all) to collect all defined summaries into one operation.

```python
class TensorboardKeras(object):
  def __init__(self, model, log_dir):
      self.model = model
      self.log_dir = log_dir
      self.session = K.get_session()

      self.lr_ph = tf.placeholder(shape=(), dtype=tf.float32)
      tf.summary.scalar('lr', self.lr_ph)
      self.merged = tf.summary.merge_all()
      self.writer = tf.summary.FileWriter(self.log_dir)
```

The next step is to get current value of learning rate. With Keras we can access it through [Keras backend](https://keras.io/backend/).

```python
def _get_lr(self):
    return K.eval(self.model.optimizer.lr)
```

Obtaining learning rate, as shown in code above, has to be done in regular steps.
[Lambda callbacks](https://keras.io/callbacks/#lambdacallback) allows to execute arbitrary function at certain stages of training:
* `on_epoch_begin`, `on_epoch_end`
* `on_batch_begin`, `on_batch_end`
* `on_trainbegin`, `on_train_end`

For our purpose, we will utilize `on_epoch_end` which expects two positional arguments: `epoch` and `logs`.
`LambdaCallback` is later fed to [`fit`](https://keras.io/models/sequential/#fit) or [`fit_generator`](https://keras.io/models/sequential/#fit_generator) method as optional argument called `callbacks`.
Notice that `callbacks` argument expects list as input. We could define several callback functions that will be exectuted at appropriate times.

```python
callbacks = [LambdaCallback(on_epoch_end=lambda epoch, logs: self.tensorboard.on_epoch_end_cb(epoch, logs))]
```

In `on_epoch_end_cb` function, we will evaluate merged summaries operation and feed `lr_ph` placeholder with current learning rate value.

```python
def on_epoch_end(self, epoch, logs):
  summary = self.session.run(self.merged, feed_dict={ self.lr_ph: self._get_lr() })
  self.writer.add_summary(summary, epoch)
  self.writer.flush()
```

## Rename training and validation metrics in Tensorboard
To update remaining metrics, we have to add another metric placeholders and feed current metric values at the end of every epoch.

Below you can find full example of custom Tensorboard class that is supported by Keras.

```python
class TensorboardKeras(object):
  def __init__(self, model, log_dir):
    self.model = model
    self.log_dir = log_dir
    self.session = K.get_session()

    self.lr_ph = tf.placeholder(shape=(), dtype=tf.float32)
    tf.summary.scalar('lr', self.lr_ph)

    self.val_loss_ph = tf.placeholder(shape=(), dtype=tf.float32)
    tf.summary.scalar('val/loss', self.val_loss_ph)

    self.val_acc_ph = tf.placeholder(shape=(), dtype=tf.float32)
    tf.summary.scalar('val/acc', self.val_acc_ph)

    self.train_loss_ph = tf.placeholder(shape=(), dtype=tf.float32)
    tf.summary.scalar('train/loss', self.train_loss_ph)

    self.train_acc_ph = tf.placeholder(shape=(), dtype=tf.float32)
    tf.summary.scalar('train/acc', self.train_acc_ph)

    self.merged = tf.summary.merge_all()
    self.writer = tf.summary.FileWriter(self.log_dir)

  def _get_lr(self):
    return K.eval(self.model.optimizer.lr)

  def on_epoch_end(self, epoch, logs):
    summary = self.session.run(self.merged,
                               feed_dict={self.lr_ph: self._get_lr(),
                                          self.val_loss_ph: logs["val_loss"],
                                          self.train_loss_ph: logs["loss"],
                                          self.val_acc_ph: logs["val_acc"],
                                          self.train_acc_ph: logs["acc"]
                                          })
    self.writer.add_summary(summary, epoch)
    self.writer.flush()

  def on_epoch_end_cb(self):
    return LambdaCallback(on_epoch_end=lambda epoch, logs:
                                       self.on_epoch_end(epoch, logs))
```
