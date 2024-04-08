import "./Checkbox.scss";

type CheckProps = {
  title: string;
  big: boolean;
};

const Checkbox = ({ title, big }: CheckProps) => {
  return (
    <section className="checkbox">
      <label
        htmlFor="check"
        className={big ? "big checkbox__label" : "checkbox__label"}
      >
        <input type="checkbox" name="checkbox" />
        {title}
      </label>
    </section>
  );
};

export default Checkbox;
