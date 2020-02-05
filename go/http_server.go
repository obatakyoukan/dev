package main

import(
    "fmt"
    "html"
    "net/http"
    "os"
    "io/ioutil"
)

func main(){
    http.HandleFunc("/",func( w http.ResponseWriter , r *http.Request ){
	file, err := ioutil.ReadFile("html/test.html")
	if err != nil {
	    fmt.Println( os.Stderr , err )
	    os.Exit(1)
	}
	str := string( file )
	fmt.Fprint( w , str )
	//fmt.Print( str )
	//fmt.Fprint(w, "<html> <body> Hello </body> </html>" )
    })
    http.HandleFunc("/hello", func( w http.ResponseWriter, r *http.Request ){
	fmt.Fprint(w, "<html> <body> Hello </body> </html>" )
    } )

    http.HandleFunc("/echo",func( w http.ResponseWriter , r *http.Request ){
	val := r.FormValue("say")
	fmt.Fprintf(w, " <html> <body> echo: %s </body> </html>" , html.EscapeString(val) )
    })

    err := http.ListenAndServe(":8080",nil)
    if( err != nil ){
	fmt.Println(err)
	os.Exit(1)
    }
}


