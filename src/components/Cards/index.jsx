export const Cards = ({
  title,
  description,
  description2,
  description3,
  quantidade,
  price,
  img,
  url,
  showButton,
  addProduct,
  removeProduct,
}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{description2}</p>
      <p>{description3}</p>
      <p>{price}</p>
      <img src={img} alt="imagem do produto" />
    </div>
  );
};
