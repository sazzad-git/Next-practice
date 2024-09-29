

import Meals from "@/component/Meals";

function MealsPage() {

  return (
    <div className="p-12">
      <h1 className="text-3xl font-semibold text-red-400">Choose Your Meals</h1>
      <p>Choose meals of you choice by searching...</p>

      <Meals />
    </div>
  );
}

export default MealsPage;
