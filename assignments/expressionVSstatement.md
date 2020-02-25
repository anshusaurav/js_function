# Expression vs Statement

## Write down if the code is valid or not with reason.

1. What is the output or error of the code below.

```js
function add(var a = 0,var b = 0){
  return a + b;
}
add(21, 23); 
var should not be used with parameters in function definition
```

2. What is the output or error of the code below.

```js
function add(a = 0; b = 0) {
  return a + b;
}
add(21, 23);  
semicolon should not be used in function definition
```

3. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(21, 23);
output is 44
```

4. What is the output or error of the code below.

```js
function add(a = 0, b) {
  return a + b;
}
add(21);
Output will be NaN
```

5. What is the output or error of the code below.

```js
function add(a = 0, b = 0) {
  return a + b;
}
add(undefined, 21);
Output will be NaN
```

6. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
add(211);
return should not be used in first line inside function declaration and no semicolon after return statements. 
```

7. What is the output or error of the code below.

```js
function knowWhy(value) {
  return if(value === 21){
    return "Yes"
  } else {
    return "No"
  }
}
add(21);
return should not be used in first line inside function declaration and no semicolon after return statements. 
```

8. What is the output or error of the code below.

```js
function isItIf(ifElse) {
  return ifElse;
}
add(if(true){console.log('Testing')});
No error but wont output anything.
```
