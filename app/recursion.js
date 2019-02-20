recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   *
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   *
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: (data, name) => {
    const filesList = [];
    const directories = [];

    processDir(data);

    function processDir(directory) {
      const { dirName, files, subDirs } = directory;

      directories.push(dirName);

      for (let i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!name || directories.indexOf(name) > -1) {
            filesList.push(file);
          }
        } else {
          processDir(file);
        }
      }

      for (let j = 0; j < subDirs.length; j++) {
        const subDir = subDirs[j];
        processDir(subDir);
      }

      directories.pop();
    }
    return filesList;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   *
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   *
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: (n) => {
    function fib(n) {
      return n < 2 ? n : fib(n - 1) + fib(n - 2);
    }
    return fib(n);
  },
};
