# displayMask
AngularJS filter for display values with custom masks.


### Install

**With Bower**
* Install the dependency:

   ```javascript
   bower install display-mask --save
   ```
* Add ngMask.min.js to your code:

   ```html
   <script src='bower_components/displayMask/display-mask.min.js'></script>
   ```
* Include module dependency:

   ```javascript
   angular.module('yourApp', ['displayMask']);
   ```

### How To Use

1. **Add displayMask plugin after your AngularJS.**

   ```html
   <script src="angular.min.js"></script>
   <script src="display-mask.min.js"></script>
   ```
2. **Add displayMask module dependency to your app.**

   ```javascript
   angular.module('yourApp', ['displayMask']);
   ```
3. **Use the avaiable patterns to create your mask. Set the mask attribute.**

   ```html
   <span>{{'01234567890' | mask:'999.999.999-99'}}</span>
   ```
   
   //012.345.678-90
   
   
    - "/" isn't a pattern. It's considered a divisor. Every divisor is automatically written by ngMask. [Check all available patterns here.](https://github.com/candreoliveira/ngMask/#available-patterns)