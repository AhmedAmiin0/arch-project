import Breadcrumb from "../../components/layout/breadcrumb/Breadcrumb";
import Layout from "../../components/layout/Layout";
import ProjectsGrid from "../../components/projects/grid/ProjectsGrid";
import Pagination from "../../components/projects/pagination/Pagination";
export default function projects() {
    const breadcrumb = {
        title: "projects",
        subtitle: "Our projects"
    }
    return (<Layout>
            <Breadcrumb props={breadcrumb}/>
            <ProjectsGrid/>
            <Pagination/>
        </Layout>
    )
}