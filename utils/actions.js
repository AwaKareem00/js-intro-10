

class Actions {
    
    static async visitUrl(url) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (url.startsWith('www') || url.startsWith('https://')) {
            resolve('URL visited successfully');
          } else {
            reject('Wrong URL');
          }
        }, 1000);
      });
    }
  
    
    static async login(username, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'TechGlobal' && password === 'Test1234') {
            resolve('Logged in successfully');
          } else {
            reject('Wrong credentials');
          }
        }, 3000); // 3-second delay
      });
    }
  
    // PART-4: validateTitle method
    static async validateTitle(title) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (title && title.trim() !== '') {
            resolve('Title validated successfully');
          } else {
            reject('Wrong title');
          }
        }, 500); // Half-second delay
      });
    }
  }
  
  // PART-5: Export the Actions class with CommonJS
  module.exports = Actions;
  