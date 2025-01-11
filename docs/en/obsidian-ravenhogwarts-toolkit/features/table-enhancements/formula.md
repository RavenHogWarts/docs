# Built-in Formulas

## Statistics Related

### COUNT
::: tip Function
Count the number of items in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @param {string} [modifier] - Optional modifier for counting behavior
 *        - 'values' (default): Count all values
 *        - 'unique': Count unique values only
 *        - 'empty': Count empty values
 * @returns {number} The count result
 * 
 * @example
 * // Count all values in Status column
 * Count([Status]) // same as Count([Status], 'values')
 * 
 * // Count unique values in Status column
 * Count([Status], 'unique')
 * 
 * // Count values across multiple columns
 * Count([Status, Category])
 */
Count([columns], modifier?)
```

```js [Examples]
// Count all values in Status column
Count([Status])

// Count unique values in Status column
Count([Status], 'unique')

// Count values across multiple columns
Count([Status, Category])
```
:::

### SUM
::: tip Function
Calculate the sum of numeric values in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @returns {number} The sum result
 * 
 * @example
 * // Sum values in Status column
 * Sum([Status])
 * 
 * // Sum values across multiple columns
 * Sum([Status, Category])
 */
Sum([columns])
```

```js [Examples]
// Sum values in Status column
Sum([Status])

// Sum values across multiple columns
Sum([Status, Category])
```
:::

### AVERAGE
::: tip Function
Calculate the average of numeric values in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @returns {number} The average result
 */
Average([columns])
```

```js [Examples]
// Calculate average of Status column
Average([Status])

// Calculate average across multiple columns
Average([Status, Category])
```
:::

### MIN
::: tip Function
Find the minimum value in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @returns {number} The minimum value
 */
Min([columns])
```

```js [Examples]
// Find minimum value in Status column
Min([Status])

// Find minimum value across multiple columns
Min([Status, Category])
```
:::

### MAX
::: tip Function
Find the maximum value in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @returns {number} The maximum value
 */
Max([columns])
```

```js [Examples]
// Find maximum value in Status column
Max([Status])

// Find maximum value across multiple columns
Max([Status, Category])
```
:::

### MEDIAN
::: tip Function
Calculate the median of numeric values in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @returns {number} The median value
 */
Median([columns])
```

```js [Examples]
// Calculate median of Status column
Median([Status])

// Calculate median across multiple columns
Median([Status, Category])
```
:::

### MODE
::: tip Function
Find the mode (most frequent value) in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @returns {number} The mode value
 */
Mode([columns])
```

```js [Examples]
// Find mode in Status column
Mode([Status])

// Find mode across multiple columns
Mode([Status, Category])
```
:::

### STDDEV
::: tip Function
Calculate the standard deviation of numeric values in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @returns {number} The standard deviation
 */
StdDev([columns])
```

```js [Examples]
// Calculate standard deviation of Status column
StdDev([Status])

// Calculate standard deviation across multiple columns
StdDev([Status, Category])
```
:::

### VARIANCE
::: tip Function
Calculate the variance of numeric values in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @returns {number} The variance
 */
Variance([columns])
```

```js [Examples]
// Calculate variance of Status column
Variance([Status])

// Calculate variance across multiple columns
Variance([Status, Category])
```
:::

## Time Related

### TIME_EARLIEST
::: tip Function
Find the earliest date in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @param {string} [format='yyyy-MM-dd'] - Optional date format string
 *        - 'yyyy-MM-dd' (default)
 *        - 'yyyy-MM-dd HH:mm:ss'
 *        - 'HH:mm'
 *        - Any valid moment.js format string
 * @returns {string} The earliest date formatted according to format parameter
 */
TimeEarliest([columns], format?)
```

```js [Examples]
// Find earliest date in Status column using default format
TimeEarliest([Status])

// Find earliest date across multiple columns with custom format
TimeEarliest([Status, Category], 'yyyy-MM-dd HH:mm:ss')
```
:::

### TIME_LATEST
::: tip Function
Find the latest date in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @param {string} [format='yyyy-MM-dd'] - Optional date format string
 *        - 'yyyy-MM-dd' (default)
 *        - 'yyyy-MM-dd HH:mm:ss'
 *        - 'HH:mm'
 *        - Any valid moment.js format string
 * @returns {string} The latest date formatted according to format parameter
 */
TimeLatest([columns], format?)
```

```js [Examples]
// Find latest date in Status column using default format
TimeLatest([Status])

// Find latest date across multiple columns with custom format
TimeLatest([Status, Category], 'yyyy-MM-dd HH:mm:ss')
```
:::

### TIME_SPAN
::: tip Function
Calculate the time span between dates in selected columns
:::

::: code-group
```js [Syntax]
/**
 * @param {string[]} columns - Array of column names from markdown table headers
 * @param {string} [format='yyyy-MM-dd'] - Optional date format string
 *        - 'yyyy-MM-dd' (default)
 *        - 'yyyy-MM-dd HH:mm:ss'
 *        - Any valid moment.js format string
 * @param {string} [unit='days'] - Optional unit for result
 *        - 'days' (default)
 *        - 'hours'
 *        - 'minutes'
 * @returns {number} The time span in specified unit
 */
TimeSpan([columns], format?, unit?)
```

```js [Examples]
// Calculate time span in days using default format
TimeSpan([Status])

// Calculate time span with custom format
TimeSpan([Status], 'yyyy-MM-dd HH:mm:ss')

// Calculate time span across multiple columns with custom format and unit
TimeSpan([Status, Category], 'yyyy-MM-dd HH:mm:ss:hours')
```
:::
