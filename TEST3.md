# TEST3

> ```javascript
> function zeroFill(number, width) {
>   width -= number.toString().length;
>   if (width > 0) {
>     return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
>   }
>   return number + ""; // always return a string
> }
> ```

- I'm not entirely sure what this function is supposed to do. It seems to want to recreate String.padStart() specifically for numbers, but ignore the decimal point, if there is one. Going forward I'll assume that's the expected functionality. For a function like this I would definitely add documentation or more comments on what exactly is expected.
- There is no validation to see if number and width are actually numbers. I would add two checks to see if the parameter is set and if it is a number using !isNaN. If it is not a number, I would throw an error.
- Since the number.toString() value is used, potentially, twice in this method I would store the string in its own variable
- Line 2-4 introduce a bug. If there is a decimal point in `number` the number as a string will have +1 width. This means that if `number` and `width` are short enough, the if block will be ignored and the number will simply be printed out as a string. I would prevent this by moving the check for a decimal point out of the if block.
- Line 4 is difficult to read, if I had to do it this way I would break individual steps into different lines.
- If newer versions of ES are allowed, I would use String.padStart on line 4.
- The final code would be something like


	```javascript
	// Pad a number with zeros to make the string have a width of 'width'. NOTE: If number is a float, the decimal point is not included in width.
	function zeroFill(number, width) {
                if (!number || isNaN(number)) {
                        throw new Error('number param is not a number')
                }
                if (!width || isNaN(width)) {
                        throw new Error('widht param is not a number')
                }

		if (!(number % 1 === 0)) {
			// Add 2. One to ignore the decimal point, and one for the additional zero.
			width += 2;
		}

		return number.toString().padStart(width, "0");
	}
	```

NOTE: If checking for a decimal is a bug, and newer versions of ES are allowed, I would simply change the function to

	function zeroFill(number, width) {
		if (!number || isNaN(number)) {
			throw new Error('number param is not a number')
		}
		if (!width || isNaN(width) {
			throw new Error('widht param is not a number')
		}

		return number.toString().padStart(width, "0");
	}
