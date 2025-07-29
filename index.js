function startCoffeeAssistant() {
    
    const username = prompt("enter user name(admin or user):");
    const password = prompt("enter your password:");
  
    if ((username === "admin" || username === "user") && password === "1234") {
      const role = username === "admin" ? "boss" : "employee ";
      alert(`Welcome to servicess : ${role}`);
    } else {
      alert("❌ wrong inpute.");
      return;
    }
  //part2
    const name = prompt("What is your name?");
    const age = parseInt(prompt(" what is your age"));
    const coffee = prompt("Which coffee do you want?(experesso / latte / cappuccino)").toLowerCase();
    const quantity = parseInt(prompt("How many cups?"));
    const prices = {
      espresso:2.5,     
      latte: 3.5,
      cappuccino: 4.5,
    };
    const pricefor1cup = prices[coffee] || 0;
  
    if (pricefor1cup === 0 || isNaN(quantity) || quantity < 1) {
      alert("❌ Invalid inpute.");
      return;
    }
    const originalTotal = pricefor1cup * quantity;
  
    //  part3 
    let discount = 0;
    if (age < 18 || age > 60) {
      discount = originalTotal * 0.1;
    }
    const totalAfterDiscount = originalTotal - discount;
  //part4
    const split = parseInt(prompt("How many peopale pay the bill?"));
    const tipPercent = parseInt(prompt(" (0, 5, 10, 15)how much do you tip?"));
  
     tipAmount = totalAfterDiscount * (tipPercent / 100);
    const finaltotal = totalAfterDiscount + tipAmount;
    const foreachpers = finaltotal / split;
  
  //part5
    const bill = `
  your bill ${name}
  ---------------------------
   type of coffee: ${coffee}
   quantity: ${quantity}
  
   tip(${tipPercent}%): ${tipAmount.toFixed(1)} 
  -------------------------------
    total: ${finaltotal.toFixed(1)} 
    Number of payers: ${split}
     everyones contribution: ${foreachpers.toFixed(1)} 
  -------------------------------
  !  thanks for your order   
    `;
  
    alert(bill);
  }