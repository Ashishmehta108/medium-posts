export default async function BlogsServerComponent({params}:{
    params:Promise<{id:string}>
}){
    const {id}=await params;
    return <div style={{"marginLeft":"20px"}}>{id} from server component</div>
}