import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useBudgets } from "./useBudgets";
import { useForm, Controller } from "react-hook-form";
import { createBudget } from "../../services/budgetApi";
import toast from "react-hot-toast";

function CreateBudgetForm({ close, openModal }) {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { budgets } = useBudgets();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createBudget,
    onSuccess: () => {
      toast.success("Budget created successfully");
      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  const availableCategories = [
    "Entertainment",
    "Bills",
    "Groceries",
    "Dining Out",
    "Transportation",
    "Personal Care",
    "Education",
    "Shopping",
    "Lifestyle",
    "General",
  ];
  
  const availableThemes = [
    "#277c78",
    "#f2cdac",
    "#82c9d7",
    "#626070",
    "#c94736",
    "#826cb0",
    "#597c7c",
    "#93674f",
    "#934f6f",
    "#3f82b2",
    "#97a0ac",
    "#7f9161",
    "#af81ba",
    "#be6c49",
  ];

  const categories = availableCategories.filter(
    (category) => !budgets.some((budget) => budget.category === category),
  );

  const themes = availableThemes.filter(
    (theme) => !budgets.some((budget) => budget.theme === theme),
  );

  const submitForm = (data) => {
    mutate(data); // Pass form data to parent or backend
    close(!openModal);
  };

  return (
    <div className="absolute inset-0 flex h-screen items-center justify-center bg-black/40">
      <div className="max-w-sm rounded-2xl bg-gray-100 px-6 py-8 md:max-w-xl">
        <div className="flex items-center justify-between gap-3 pb-4">
          <h1 className="text-3xl font-bold">Add New Budget</h1>
          <img
            src="/icon-close-modal.svg"
            alt=""
            onClick={() => close(!openModal)}
          />
        </div>
        <p className="pb-4 text-sm text-gray-600">
          Choose a category to set a spending budget.These categories can help
          you monitor spending.{" "}
        </p>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-3"
        >
          <div>
            <label
              htmlFor="category"
              className="block text-xs font-medium text-gray-700"
            >
              Budget Category
            </label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Category is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="mt-1 w-full rounded-lg border border-gray-500 bg-inherit px-4 py-2 outline-none"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="maximum"
              className="block text-xs font-medium text-gray-700"
            >
              Maximum Spend
            </label>
            <input
              {...register("maximum", {
                required: "Maximum spend is required",
                valueAsNumber: true,
              })}
              type="number"
              placeholder="e.g., 2000"
              className="mt-1 w-full rounded-lg border border-gray-500 bg-inherit px-4 py-2 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="theme"
              className="block text-xs font-medium text-gray-700"
            >
              Theme
            </label>
            <Controller
              name="theme"
              control={control}
              rules={{ required: "Theme is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="mt-1 w-full rounded-lg border border-gray-500 bg-inherit p-2 outline-none"
                >
                  {availableThemes.map((theme) => (
                    <option
                      key={theme}
                      value={theme}
                      disabled={!themes.includes(theme)}
                    
                    >
                      {theme} {themes.includes(theme) ? "" : "(Already used)"}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.theme && (
              <p className="text-sm text-red-500">{errors.theme.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-2 rounded-lg bg-[#201f24] px-4 py-3.5 font-bold text-white hover:bg-[#696868]"
            disabled={isCreating}
          >
            Add Budget
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBudgetForm;
