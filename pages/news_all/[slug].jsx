import NestedLayout from "../../components/layouts/Nested_Layout";
import NewsData from "../../components/news/News_Data";


export default function newsSlug ({id,name,dec}){

    return(
        <>
            <div className="container">
                <h1>{id}</h1>
                <h2>{name}</h2>
                <p>{dec}</p>
            </div>

        </>
    )
}


export async function getStaticProps(context) {
    const {params} = context;
      return {
        props: NewsData.find(item => item.id === params.id),
      }
  }
  
  
  export async function getStaticPaths() {
      return{
        paths: NewsData.map(item=>({
          params:{
              id: item.id,
          }
        })),
        fallback: false, 
      }
    }


newsSlug.getLayout = NestedLayout;
