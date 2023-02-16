import { Button } from "ui";
import { getCountries } from "zinco";

export default function Docs() {

  const onGetCountries = () => {
    console.log('onGetCountries');
    console.log(getCountries());
  }

  return (
    <div>
      <h1>Docs</h1>
      <Button />
      <button onClick={onGetCountries}>
        getCountries
      </button>
    </div>
  );
}
