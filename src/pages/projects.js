import Projects from "@/components/Projects/Project";

export default function progects(props) {
    return (
        <>
            <Projects data={props.projects} />
        </>
    );
}


export async function getStaticProps() {
    const res =await fetch("http://localhost:3000/api/data")
    const data =await res.json()
    return{
        props:{
            projects:data
        }
    }
}