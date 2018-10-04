---
layout: blog
title:  "Temperature in softmax layer"
date:   2017-12-23 00:0:00 +0000
disqus_identifier: 2017-12-23
author: martin
comments: true
abstract: In <a href="https://arxiv.org/abs/1503.02531">Distilling the Knowledge in a Neural Network</a> paper, there is described how soft targets of the final <a href="https://en.wikipedia.org/wiki/Softmax_function">softmax layer</a> can be modified by additional denominator called <i>temperature</i>. This blog posts aims to visualize effect of temperature magnitude on output of modified softmax layer.
---

In [Distilling the Knowledge in a Neural Network](https://arxiv.org/abs/1503.02531) paper, there is described how soft targets of the final [softmax layer](https://en.wikipedia.org/wiki/Softmax_function) can be modified by additional denominator called *temperature*. This blog posts aims to visualize effect of temperature magnitude on output of modified softmax layer.

> Our more general solution, called “distillation”, is to **raise the temperature of the final softmax until the cumbersomemodel produces a suitably soft set of targets**. We then use the same high temperature when training the small model to match these soft targets. We show later that matching the logits of the cumbersome model is actually a special case of distillation.
>
> [https://arxiv.org/abs/1503.02531](https://arxiv.org/abs/1503.02531)

## Temperature


```python
%matplotlib inline

import numpy as np
import matplotlib
import numpy as np
import matplotlib.pyplot as plt
```


```python
def softmax(logits, T=1):
    logits_temperature = np.exp(logits/T)
    return logits_temperature/np.sum(logits_temperature, axis=1)

def softmax_temperature_test(L, T):
    S = softmax(L, T)
    print(S)
    plt.bar(range(len(S[0])), S[0])
```

## Logits


```python
L = np.array([[10, 20, 30]])
```

### T = 1


```python
softmax_temperature_test(L, T=1)
```

    [[  2.06106005e-09   4.53978686e-05   9.99954600e-01]]



![png]({{ "images/2017-12-23-knowledge-distillation/output_7_1.png" | absolute_url }})


### T = 10


```python
softmax_temperature_test(L, T=10)
```

    [[ 0.09003057  0.24472847  0.66524096]]



![png]({{ "images/2017-12-23-knowledge-distillation/output_9_1.png" | absolute_url }})


### T = 20


```python
softmax_temperature_test(L, T=20)
```

    [[ 0.18632372  0.30719589  0.50648039]]



![png]({{ "images/2017-12-23-knowledge-distillation/output_11_1.png" | absolute_url }})

### T = 30


```python
softmax_temperature_test(L, T=30)
```

    [[ 0.23023722  0.32132192  0.44844086]]



![png]({{ "images/2017-12-23-knowledge-distillation/output_13_1.png" | absolute_url }})


### T = 100


```python
softmax_temperature_test(L, T=100)
```

    [[ 0.30060961  0.33222499  0.3671654 ]]



![png]({{ "images/2017-12-23-knowledge-distillation/output_15_1.png" | absolute_url }})

