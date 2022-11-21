import Footer from "../Footer"
import Header from "../Header"

export default function NestedLayout(page){

        return (
            <>
              <Header/>
                <div>{page}</div>
              <Footer/>
            </>
        )
      
}