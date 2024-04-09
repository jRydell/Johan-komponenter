import "./Checkbox.scss";

type CheckProps = {
  title: string;
  big: boolean;
  isChecked: boolean;
  onChange: () => void;
};

const Checkbox = ({ title, big, isChecked, onChange }: CheckProps) => {
  return (
    <section className="checkbox">
      <label
        htmlFor={title}
        className={big ? "big checkbox__label" : "checkbox__label"}
      >
        <input
          id={title}
          type="checkbox"
          name="checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        {title}
      </label>
    </section>
  );
};

export default Checkbox;
