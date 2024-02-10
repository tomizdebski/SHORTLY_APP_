function generateRandomString(length: number) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // możesz dodać więcej liter, jeśli chcesz również uwzględnić wielkie litery lub inne znaki
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      result += alphabet[randomIndex];
    }

    return process.env.NEXT_PUBLIC_URL + result;
  }

  export default generateRandomString;
  