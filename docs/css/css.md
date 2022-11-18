## 基本选择器

### *

```css
* {
  text-align: center;
  color: blue;
}
```

这个表示选择所有元素

### 标签

```css
p{
	color:red;
}
```

### class

```css
.a{
	color:red;
}
```

### id

```css
#one{
	color:red;
}
```

### 属性选择器

```html
<h2 haid="demo_2">heihei</h2>
<style>
[haid="demo_2"]{
  color: red;
}
</style>
```

1.属性可以自己任意定义，但是并不会对标签产生任何效果。

2.如果不需要特意指定值，可以直接写【haid】，那么就会选择所有包含这个属性的标签

3.属性选择器的值可以用更多类似通配符的定义，后面单独讲。

## 伪类选择器

### :active

元素被点击的时候的css样式

```css
a,p~h2{
    color: red;
  }
  a:active,p~h2:active{
    color: greenyellow;
  }
```

### :hover

鼠标经过元素时候的样式，离开后变为以前的样式

```css
a:hover,h2:hover{
    color: blue;
  }
```



## 关系选择器

### div>p

```css
div > p {
  background-color: yellow;
}
```

代表div下面所有的p子元素，注意只有第一层的子元素，在往下的不会生效

### div+p

和div同级，然后div后面的第一个p元素

```css
div + p {
  background-color: yellow;
}
```

### div~p

和div处在同一个父元素下，然后div后面的所有p元素。注意div前面的选择不了。

```css
p ~ ul {
  background: #ff0000;
}
```



## flex布局

flex布局主要由父元素，子元素的属性定义来操作

### 父元素

###### display

```css
div{
	display:flex;
}
```

###### flex-direction

排列的方向，默认row横向，可以改成column纵向

默认是自左向右，自上向下。

可以用row-reverse来反向布局

```css
main{
    display: flex;
    flex-direction: row-reverse;
}
```

###### flex-wrap

flex又称弹性布局，就是因为它默认是不可以换行的，如果所有元素的宽度超过了总宽度，那么所有的元素会等比例压缩

所以它的默认值是nowrap,如果我们把值改成wrap,那么只要依次排列的元素宽度不够的时候就会自动换行。

```css
main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
```

###### flex-flow

是前2个属性的缩写

```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

###### justify-content

在排列方向上，元素的对齐方式

center居中，flex-start就是从头到尾(左到右),flex-end就是从尾到头(右到左)

```css
main{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
```

space-around 让每个元素平均分配剩余空间，就是所有元素的左右margin都相等

space-between就是两端的靠边，中间的分配剩余空间

space-evenly就是让所有元素之间的空隙全部相等

###### align-items

在纵轴上的排列方式

这个命令只有当纵轴有固定值的时候才生效 值 center flex-start flex-end

```css
main{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        height: 300px;
        background-color: rgb(252, 231, 234);
        align-items:center;
    }
```

### 子元素

###### order

它的值是正数，可以负数，越小，表示该元素排列在前面.默认值是0

```css
main div:nth-child(2){
        order: -2;
    }
    main div:nth-child(3){
        order: -1;
    }
```

###### flex-grow

是一个子元素占剩余空间的多少份，

```css
div:nth-child(5){
        flex-grow: 1;
    }
   div:nth-child(4){
        flex-grow: 2;
    }
```

###### flex-shrink

在nowrap的情况下，空间不足的时候，

flex-shrink 属性指定一个弹性项目相对于其他弹性项目将收缩多少。默认值是1，负数无限，如果是0，那么优先本元素宽度不变，其它元素压缩，数字越大压缩的越厉害。

###### flex-basis

flex-basis 属性指定弹性项目的初始长度。

```css
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-basis: 200px">3</div>
  <div>4</div>
</div>
```

###### flex 

The `flex` property is a shorthand property for the `flex-grow`, `flex-shrink`, and `flex-basis` properties.

```css
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex: 0 0 200px">3</div>
  <div>4</div>
</div>
```

###### align-self

在纵轴上的对齐方式

和align-items很像，但是align-items针对的是所有，所以align-items优先

```css
<div class="flex-container">
  <div>1</div>
  <div style="align-self: flex-start">2</div>
  <div style="align-self: flex-end">3</div>
  <div>4</div>
</div>
```

默认值是flex-start,可设置成center

# Grid布局

就是网格布局，它的优势就是能够很好，很规范的定位各元素的位置。

不太适合响应式布局，适合用在PC端

### 父元素

首先display：grid   块级

或者display：inline-grid 行级grid

###### grid-template

网格就像是excel，按照网页的布局，我们一般只要确定有多少列就可以了。然后行自动按元素数量自动生成

```css
main{
        display: grid;
        grid-template-columns: auto auto auto;
    }
```

里面的每个auto代表有3列，每个宽度auto就是按width平均分配或者按照里面的元素宽度来。，如果指定宽度，那么就按指定宽度来。

```css
main{
        display: grid;
        grid-template-columns: 10% 50px auto;
    }
```

###### gap

就是表格之间的空隙

```css
main{
        display: grid;
        grid-template-columns: 10% 50px auto;
        background-color: pink;
        column-gap: 2px;
        row-gap: 2px;        
    }
```

缩写形式

```css
.grid-container {
  display: grid;
  gap: 50px 100px;
}
```

第一个参数代表row,第2个代表column

或者两个都一样就写一个参数

```css
.grid-container {
  display: grid;
  gap: 50px ;
}
```

### 子元素

所有的子元素都是按照从左到右来排，但是我们可以指定某一个元素占哪些格子，没指定的继续按照原来的顺序排列,但是总体的顺序不会变。

###### grid-column

指的是从哪一列到哪一列

```css
div:nth-child(1){
        grid-column: 2/4;
    }
```

最左边的第一个线就是1

如果超出原来设定的表格列数，会自动将grid变宽。

**Note:** The `grid-column` property is a shorthand property for the `grid-column-start` and the `grid-column-end` properties.

###### grid-row

和上面的一样用法，当然可以同时用

```css
div:nth-child(1){
        grid-column: 2/5;
        grid-row: 1/3;
    }
```

