export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch(`https://e-bazaar-sage.vercel.app/auth/signup`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://e-bazaar-sage.vercel.app/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function authenticateUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://e-bazaar-sage.vercel.app/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.json();
        reject(error);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export function logoutUser(update) {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
