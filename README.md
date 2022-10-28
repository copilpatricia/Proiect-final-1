# itschool-news

The React project from my web development course @ IT School

## Demo

The project is deployed here: https://it-school-news-pm.netlify.app

## Description

Music Category
In order to show the music category, I added in the Header section the following link:
`<Link to=”category/music”>Music</Link>`, where the “category/music” is the defined parameter in App.js at the` <Route path=”/category/:categoryId” element={newsCategory/>}`

When the page has loaded, the categoryId is out of the parameter of the route using useParams.

To retrieve the content for the music category I used the useFetch hook and getNewsCategoryEndPoint function.For the Home page I created the following constants:

```
const footballUrl = getNewsCategoryEndpoint(“music”, 1, 6);
const musicData = useFetch(musicUrl);
```

For the NewsCategory page, the music category appears because I created a data constant that uses useFetch which has url as a parameter:

```
const {categoryId} = useParams();
const url=getNewsCategoryEndPoint(“categoryId”, 1);
const data=useFetch(url);
  ```

To show the news cards in Home page, I added the NewsCardList component with the prop {newsList}:

```
  <section>
  <Container>
    <h1>Music</h1>
    <NewsCardList newsList={newsList}/>
  </Container>
</section>
```

To show the news in the cards, I used the NewsCardList component and the adaptor to convert the data and create a list wich can be read by the NewsCardList. Using the map method I took the objects and I used the data to create new objects.

To show music news in NewsDetails page, I imported the getNewsDetailsEndPoint function, I took the data for every card using useFetch function and I added in NewsCard the following link:

```
<Link to={`/news/${encodeURIComponent(newsId)}`}>
```

useLocalStorage hook

I created the useLocalStorage function with a key and a value as parameters and then I defined a let initialState with a localStorage.getItem(key).
I used the conditional || value.
In order to add an item in localStorge I created the setStateAndLocalStorage function and the hook will return the state and the setStateAndLocalStorage.
I imported in the App.js the useLocalStorage function.


Alert

I created in the components section a new file called Alert.jsx, I imported the React and BootstrapAlert to creat the Alert and then I created a constans called Alert, used an arrow function which returns a message `<p> “Ai adaugat stirea cu success!”</p>`.
I exported the Alert and used it in the NewsDetails file.
I used the useState hook: const [alert, showAlert] = useState(false).
I created a function handleAddAlert :
```
function handleAddAlert() {
showAlert(true);
setTimeout(() => {
showAlert(false);
}, 4000);
}
```
In the return part, I added `{ alert && <Alert/> }` and used the AND operator which will return true if both alert and `<Alert/>` are true and false if both of them are false.
