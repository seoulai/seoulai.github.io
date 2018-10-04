---
layout: blog
title:  "Kaggle - How to use pretrained Keras models?"
date:   2018-01-23 00:0:00 +0000
disqus_identifier: 2018-01-23
author: martin
comments: true
abstract: Training deep learning models from scratch is never a good way of aproaching new problem. Moreover, if you want to obtain reasonable baseline results fast. One of the solutions is to use pretrained models, which are available for every major deep learning framework (e.g. <a href="https://github.com/tensorflow/models/tree/master/research/slim#pre-trained-models">Tensorflow</a>, <a href="https://keras.io/applications/">Keras</a>) and <a hreaf="http://cs231n.github.io/transfer-learning/">finetune</a> them for your particular task or train separate model on outputs from pretrained model.
---

Training deep learning models from scratch is never a good way of aproaching new problem.
Moreover, if you want to obtain reasonable baseline results fast.
One of the solutions is to use pretrained models, which are available for every major deep learning framework (e.g. [Tensorflow](https://github.com/tensorflow/models/tree/master/research/slim#pre-trained-models), [Keras](https://keras.io/applications/)) and [finetune](http://cs231n.github.io/transfer-learning/) them for your particular task or train separate model on outputs from pretrained model.

[Kaggle](https://www.kaggle.com/) offers [kernels](https://www.kaggle.com/kernels) for competing in challeges without need to install anything on your computer.
However, preinstalled packages does not contain models with pretrained weights.
[beluga](https://www.kaggle.com/gaborfodor) came up with a simple [solution](https://www.kaggle.com/gaborfodor/keras-pretrained-models) how to include pretrained models to any Kaggle kernel.
Five Keras pretrained models were uploaded to Kaggle as a [dataset](https://www.kaggle.com/datasets).
Following table shows accuracy on ImageNet challenge for each available pretrained model.

| Model  | Top-1 Accuracy | Top-5 Accuracy |
| ------ | -------------- | ---------------|
| Xception | 0.790 | 0.945 |
| VGG16 | 0.715 | 0.901 |
| VGG19 | 0.727 | 0.910|
| ResNet50 | 0.759 | 0.929 |
| InceptionV3 | 0.788 | 0.944 |

If you decide to use Keras pretrained model in Kaggle, first, you have to include Keras Pretrained Models "dataset" using `Add Data Source` button in  `Input Files` field at the top of Kaggle kernel page and then use necessary boiler plate code.
Keras searches for models in `~/.keras/models` directory, which isn't present after startup of kernel, so we have to create it.

```python
# mkdir -p ~/.keras/models
cache_dir = Path.home() / '.keras'
if not cache_dir.exists():
    os.makedirs(cache_dir)
models_dir = cache_dir / 'models'
if not models_dir.exists():
    os.makedirs(models_dir)
```

Next, we have to copy pretrained models to `~/.keras/models`. If you want to use for example [Xception](https://keras.io/applications/#xception), run code below.

```python
!cp ../input/keras-pretrained-models/xception* ~/.keras/models/
```

And that's all! Now, we can import `xception`, build model and predict.
```python
from keras.applications import xception
xception_model = xception.Xception(weights='imagenet',
                                        include_top=False,
                                        pooling='avg')
#xception_model.predict(X_train, batch_size=32, verbose=1)
```
