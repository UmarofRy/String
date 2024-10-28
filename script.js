 // Ismni kiriting
                  let ism = prompt("Ismingizni kiriting:");
                  // Harfni kiriting
                  let harf = prompt(" harf kiriting:");

                  if (ism.includes(harf)) {
                           alert("Ha, ism ichida '" + harf + "' harfi mavjud.");
                  } else {
                           alert(" ism ichida '" + harf + "' harfi yo'q.");
                  }