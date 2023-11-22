import { Label, TextInput, TextInputProps } from "flowbite-react";

interface IPrimaryInput extends TextInputProps {
  label: string;
}

const PrimaryInput = (props: IPrimaryInput) => {
  const { label } = props;

  return (
    <div>
      {label && (
        <Label
          htmlFor={props.id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </Label>
      )}
      <TextInput className="rounded-full" {...props} />
    </div>
  );
};

export default PrimaryInput;
