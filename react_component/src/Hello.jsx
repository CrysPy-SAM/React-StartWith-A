function Hello() {
//   let myName = "satyam";
  let number = 555;
  let fullname = () => {
    return "Satyam Mishra";
  };

  return (
    <p>
      MessageNo: {number} I am your master {fullname()}
    </p>
  );
}

export default Hello;
