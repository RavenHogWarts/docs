# 内置公式

## 统计相关

### COUNT
::: tip 功能
计算选定列数量
:::

::: code-group
```js [语法]
Count([columns], modifier?)

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @param {string} modifier - 可选的修饰符,置空默认传入'values'
 *      - 'values'(默认): 计算所有值的数量
 *      - 'unique': 计算不同值的数量,即不重复的值的数量
 *      - 'empty': 计算空值的数量
 * @returns {number} - 计算结果
 */
```

```js [示例]
// 计算 Status 列的所有值数量
Count([Status]) // 等同于 Count([Status], 'values')

// 计算 Status 列中不重复的值的数量
Count([Status], 'unique')

// 计算多列的值数量
Count([Status, Category])
```
:::

### SUM
::: tip 功能
计算选定列数值总和
:::

::: code-group
```js [语法]
Sum([columns])

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @returns {number} - 计算结果
 */
```

```js [示例]
// 计算 Status 列的值总和
Sum([Status])

// 计算多列的值总和
Sum([Status, Category])
```
:::

### AVERAGE
::: tip 功能
计算选定列数值平均值
:::

::: code-group
```js [语法]
Average([columns])

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @returns {number} - 计算结果
 */
```

```js [示例]
// 计算 Status 列的值平均值
Average([Status])

// 计算多列的值平均值
Average([Status, Category])
```
:::

### MIN
::: tip 功能
计算选定列数值最小值
:::

::: code-group
```js [语法]
Min([columns])

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @returns {number} - 计算结果
 */
```

```js [示例]
// 计算 Status 列的值最小值
Min([Status])

// 计算多列的值最小值
Min([Status, Category])
```
:::

### MAX
::: tip 功能
计算选定列数值最大值
:::

::: code-group
```js [语法]
Max([columns])

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @returns {number} - 计算结果
 */
```

```js [示例]
// 计算 Status 列的值最大值
Max([Status])

// 计算多列的值最大值
Max([Status, Category])
```
:::

### MEDIAN
::: tip 功能
计算选定列数值中位数
:::

::: code-group
```js [语法]
Median([columns])

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @returns {number} - 计算结果
 */
```

```js [示例]
// 计算 Status 列的值中位数
Median([Status])

// 计算多列的值中位数
Median([Status, Category])
```
:::

### MODE
::: tip 功能
计算选定列数值众数
:::

::: code-group
```js [语法]
Mode([columns])

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @returns {number} - 计算结果
 */
```

```js [示例]
// 计算 Status 列的值众数
Mode([Status])

// 计算多列的值众数
Mode([Status, Category])
```
:::

### STDDEV
::: tip 功能
计算选定列数值标准差
:::

::: code-group
```js [语法]
StdDev([columns])

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @returns {number} - 计算结果
 */
```

```js [示例]
// 计算 Status 列的值标准差
StdDev([Status])

// 计算多列的值标准差
StdDev([Status, Category])
```
:::

### VARIANCE
::: tip 功能
计算选定列数值方差
:::

::: code-group
```js [语法]
Variance([columns])

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @returns {number} - 计算结果
 */
```

```js [示例]
// 计算 Status 列的值方差
Variance([Status])

// 计算多列的值方差
Variance([Status, Category])
```
:::

## 时间相关

### TIME_EARLIEST
::: tip 功能
计算选定列最早日期
:::

::: code-group
```js [语法]
TimeEarliest([columns], format?)

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @param {string} format - 可选的格式,决定了表格中日期的解析格式与返回值的格式,置空默认传入'yyyy-MM-dd'
 *      - 'yyyy-MM-dd'(默认)
 *      - 'yyyy-MM-dd HH:mm:ss'
 *      - 'HH:mm'
 *      - 等等.任意合法的moment.js格式化字符串
 * @returns {string} - 计算结果,返回格式为format
 */
```

```js [示例]
// 计算 Status 列的值最早日期,并按照'yyyy-MM-dd'格式解析和返回
TimeEarliest([Status])

// 计算多列的值最早日期,并按照'yyyy-MM-dd HH:mm:ss'格式解析和返回
TimeEarliest([Status, Category], 'yyyy-MM-dd HH:mm:ss')
```
:::

### TIME_LATEST
::: tip 功能
计算选定列最晚日期
:::

::: code-group
```js [语法]
TimeLatest([columns], format?)

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @param {string} format - 可选的格式,决定了表格中日期的解析格式与返回值的格式,置空默认传入'yyyy-MM-dd'
 *      - 'yyyy-MM-dd'(默认)
 *      - 'yyyy-MM-dd HH:mm:ss'
 *      - 'HH:mm'
 *      - 等等.任意合法的moment.js格式化字符串
 * @returns {string} - 计算结果,返回格式为format
 */
```

```js [示例]
// 计算 Status 列的值最晚日期,并按照'yyyy-MM-dd'格式解析和返回
TimeLatest([Status])

// 计算多列的值最晚日期,并按照'yyyy-MM-dd HH:mm:ss'格式解析和返回
TimeLatest([Status, Category], 'yyyy-MM-dd HH:mm:ss')
```
:::

### TIME_SPAN
::: tip 功能
计算选定列日期跨度
:::

::: code-group
```js [语法]
TimeSpan([column], format?:unit?)

/**
 * @param {Array<string>} columns - 要计算的列名数组,为markdown表格列头的名称
 * @param {string} format - 可选的格式,决定了表格中日期的解析格式与返回值的格式,置空默认传入'yyyy-MM-dd'
 *      - 'yyyy-MM-dd'(默认)
 *      - 'yyyy-MM-dd HH:mm:ss'
 *      - 等等.任意合法的moment.js格式化字符串
 * @param {string} unit - 可选的单位,决定了返回值的单位,置空默认传入'days'
 *      - 'days'(默认)
 *      - 'hours'
 *      - 'minutes'
 * @returns {number} - 计算结果,返回格式为format，单位为unit
 */ 
```

```js [示例]
// 计算 Status 列的值日期跨度,并按照'yyyy-MM-dd'格式和'days'单位解析返回
TimeSpan([Status])

// 计算 Status 列的值日期跨度,并按照'yyyy-MM-dd HH:mm:ss'格式和'days'单位解析返回
TimeSpan([Status], 'yyyy-MM-dd HH:mm:ss')

// 计算多列的值日期跨度,并按照'yyyy-MM-dd HH:mm:ss'格式和'hours'单位解析返回
TimeSpan([Status, Category], 'yyyy-MM-dd HH:mm:ss:hours')
```
:::