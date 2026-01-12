# Node.js Encoding and File Paths

## Buffers vs `utf8`

When you read a file **without specifying `utf8`**, Node.js returns a **Buffer**:

```js
const data = fs.readFileSync('file1.txt');
// data is a Buffer
```

A **Buffer** is raw binary data (bytes).

When you **use `utf8`**, Node.js converts those bytes into readable text:

```js
const data = fs.readFileSync('file1.txt', 'utf8');
// data is a string
```

### What does `utf8` mean?

The `'utf8'` argument specifies the **character encoding** used when reading the file.

---

## What Is Encoding?

In computing, **encoding** refers to how characters (letters, numbers, symbols) are represented as **bytes (0s and 1s)** so they can be stored in files or transmitted over the internet.

**In simple terms:**

> Encoding = the way text is turned into bytes and back.

`'utf8'` tells Node.js how to correctly interpret those bytes as **human‑readable text**.

### UTF‑8 Explained

In Node.js (and broadly in computing), **UTF‑8** stands for:

> **Unicode Transformation Format – 8‑bit**

It is the most commonly used encoding on the web and supports almost every written language.

---

## File Paths

### `file1.txt`

This is a **relative file path**.

It refers to a file named `file1.txt` in the **current working directory** (the directory where your script or terminal is running).

This is simple and commonly used when the file is in the same directory.

---

### `./file1.txt`

This is also a **relative file path** and means exactly the same thing as `file1.txt`.

It is more explicit because:

* `.` means **current directory**
* `./file1.txt` means:

  > “In the current directory, access `file1.txt`”

---

## Relative Paths

A **relative path** tells you how to reach a file or folder **starting from your current location** (current working directory).

### Example Folder Structure

```
project/
├── app.js
└── data/
    └── file.txt
```

If you run `app.js` from inside the `project/` folder:

```js
const data = fs.readFileSync('./data/file.txt', 'utf8');
```

### How This Path Works

* `./` → start from the current directory
* `data/` → go into the `data` folder
* `file.txt` → open the file

⚠️ **Important:** Relative paths work **only if your current directory is correct**.

---

## Absolute Paths

An **absolute path** gives the **full address** to a file or folder, starting from:

* the root (`/`) on Unix/macOS
* a drive letter on Windows

### Example (macOS / Linux)

```js
const data = fs.readFileSync('/Users/yourname/project/data/file.txt', 'utf8');
```

### Example (Windows)

```js
const data = fs.readFileSync('C:\\Users\\yourname\\project\\data\\file.txt', 'utf8');
```

### Why Use Absolute Paths?

* Does **not** depend on where you run your script
* Always points to the same file
* More reliable for production code

---

## Summary

* **Without `utf8`** → you get a **Buffer**
* **With `utf8`** → you get a **string**
* **Relative paths** depend on the current directory
* **Absolute paths** always point to the same location
