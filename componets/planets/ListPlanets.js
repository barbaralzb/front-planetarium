import CardPlanet from './CardPlanet'

export default function ListPlanets({listArticles}) {

    console.log('aca ya paso en el componente', listArticles[0].attributes)

    return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>List</h2>
        </div>
        <div className={styles.cards}> 
         {listArticles.map((article) => {
                return (
                    <CardPlanet 
                        key={article.id}
                        srcImage={article.attributes.Image.data[0].attributes.url}
                        title={article.attributes.Title}
                        description={article.attributes.Description}
                        price={article.attributes.Price.PriceProduct}
                    />
                )
            })}
        </div>
    </div>
    )
}