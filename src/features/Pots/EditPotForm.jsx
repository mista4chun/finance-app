import { useState } from "react";
import FormLayout from "../../ui/FormLayout";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usePots } from "./usePots";
import toast from "react-hot-toast";
import { updatePot } from "../../services/potsApi";

function EditPotForm({ pot = {}, openModal, close }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: pot.name,
      target: pot.target,
      theme: pot.theme,
    },
  });

  const { pots } = usePots();

  const { mutate, isLoading: isUpdating } = useMutation({
    mutationFn: updatePot,
    onSuccess: () => {
      toast.success("Budget updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["pots"],
      });
      close((s) => !s);
    },

    onError: (err) => toast.error(err.message),
  });

  const colors = [
    { name: "Green", hex: "#277C78" },
    { name: "Yellow", hex: "#F2CDAC" },
    { name: "Cyan", hex: "#82C9D7" },
    { name: "Navy", hex: "#626070" },
    { name: "Red", hex: "#C94736" },
    { name: "Purple", hex: "#826CB0" },
    { name: "Turquoise", hex: "#597C7C" },
    { name: "Brown", hex: "#93674F" },
    { name: "Magenta", hex: "#934F6F" },
    { name: "Blue", hex: "#3F82B2" },
    { name: "Grey", hex: "#97A0AC" },
    { name: "Army", hex: "#7F9161" },
    { name: "Pink", hex: "#E91E63" },
    { name: "Orange", hex: "#BE6C49" },
  ];

  const usedColors = pots
    .filter((b) => b.theme !== pot.theme) // Exclude the current theme
    .map((b) => b.theme);

  // Filter available colors by excluding used ones
  const availableColors = colors.filter(
    (color) => !usedColors.includes(color.hex),
  );

  const selectedTheme = watch("theme"); // Watch for the selected theme

  const submitForm = (data) => {
    mutate({ newPot: data, id: pot.id }); // Ensure the `id` is passed
  };

  // Pass form data to parent or backend

  return (
    <FormLayout
      title="Edit Pot"
      description="If your saving targets change, feel free to update your pots."
      close={close}
      openModal={openModal}
    >
      <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-700"
          >
            Pot Name
          </label>
          <input
            {...register("name", {
              required: "Pot name  is required",
              setValueAs: (value) => value.trim(),
              validate: (value) =>
                value.length > 0 || "Name cannot be empty after trimming",
            })}
            type="text"
            placeholder="$ e.g. 2000"
            className="mt-1 w-full rounded-lg border border-gray-500 bg-inherit px-4 py-2 outline-none"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="target"
            className="block text-xs font-medium text-gray-700"
          >
            Maximum Spend
          </label>
          <input
            {...register("target", {
              required: "Target is required",
              valueAsNumber: true,
            })}
            type="number"
            placeholder="$ e.g. 2000"
            className="mt-1 w-full rounded-lg border border-gray-500 bg-inherit px-4 py-2 outline-none"
          />
          {errors.target && (
            <p className="text-sm text-red-500">{errors.target.message}</p>
          )}
        </div>

        <div>
          {/* Custom Dropdown */}
          <div className="relative">
            <label
              htmlFor="theme"
              className="block text-xs font-medium text-gray-700"
            >
              Theme
            </label>
            <div
              className="mt-1 flex cursor-pointer items-center justify-between rounded-md border border-gray-500 bg-inherit px-4 py-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex items-center">
                {selectedTheme ? (
                  <>
                    <div
                      className="mr-2 h-4 w-4 rounded-full"
                      style={{ backgroundColor: selectedTheme }}
                    ></div>
                    <span className="text-gray-700">
                      {colors.find((color) => color.hex === selectedTheme)
                        ?.name || "Select Theme"}
                    </span>
                  </>
                ) : (
                  <span className="text-gray-400">Select Theme</span>
                )}
              </div>
              <svg
                fill="none"
                height="6"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11.354.854-5 5a.5.5 0 0 1-.708 0l-5-5A.5.5 0 0 1 1 0h10a.5.5 0 0 1 .354.854z"
                  fill="#201f24"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 max-h-56 w-full overflow-y-auto rounded-md border border-gray-300 bg-white shadow-md">
                {availableColors.map((color) => (
                  <div
                    key={color.hex}
                    onClick={() => {
                      setValue("theme", color.hex);
                      setIsDropdownOpen(false);
                    }}
                    className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100"
                  >
                    <div
                      className="mr-2 h-4 w-4 rounded-full"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <span>{color.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {errors.theme && (
            <p className="text-sm text-red-500">{errors.theme.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-2 rounded-lg bg-[#201f24] px-4 py-3.5 font-bold text-white hover:bg-[#696868]"
          disabled={isUpdating}
        >
          Save Changes
        </button>
      </form>
    </FormLayout>
  );
}

export default EditPotForm;
