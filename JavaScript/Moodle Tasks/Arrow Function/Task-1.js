const person = (name) => {
    const displayName = () => {
        console.log(`My name is ${name}.`);
    };
    
    return {
        name,
        displayName
    };
}
  
const Sethu = person("Sethu");
Sethu.displayName();  