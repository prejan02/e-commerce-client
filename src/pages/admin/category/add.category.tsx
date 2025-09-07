import CategoryForm from "../../../components/admin/category/form"
import PageHeader from "../../../components/admin/header/page-header"

const CreateCategory = () => {
  return (
    <main className="h-full w-full tracking-wider">
      <PageHeader
      key={'create_category'}
      title="Add New Category"
      sub_title="All products categories"
      button_text="View List"
      link_to={"/admin/category"}
      />
      <div className="p-3 mt-2 min-h-[350px] shadow rounded-md ">
        <h1 className="font-bold text-lg text-violet-900 ">Category Form</h1>
      <CategoryForm/>
      </div>
    </main>
  )
}

export default CreateCategory