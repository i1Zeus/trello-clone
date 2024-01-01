import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

const OrganizationIdPage = () => {
  const onSubmit = () => {
    "use server";
  };
  return (
    <div>
      <form action={onSubmit}>
        <FormInput id="title" label="Board Title" />
        <FormSubmit>Save</FormSubmit>
      </form>
    </div>
  );
};

export default OrganizationIdPage;
