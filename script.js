function insertArticles(){
    let items;
    fetch('https://api.reverb.com/api/articles')
        .then(response => {
            return response.json();
        })
        .then(data => {
            items = data;
        })
        .then( () => {
            let parentDiv = document.querySelector('#taskOne');
            console.log(items);
            items.articles.forEach( (item) => {
                let subDiv = document.createElement('div');
                subDiv.setAttribute('class', 'subDiv')

                let author = document.createElement('p');
                author.innerText = item.author_name;
                subDiv.append(author);

                let publishDate = document.createElement('p');
                publishDate.innerText = item.published_at;
                subDiv.append(publishDate);

                let summary = document.createElement('p');
                summary.innerText = item.summary;
                subDiv.append(summary);

                parentDiv.append(subDiv);
            })
        })
}

insertArticles();

//----------------------------------------------

const numbers = [1,2,2,5,5];

const removeDuplicates = array => [...new Set(array)];
numbers.sort(() => { return Math.random() - 0.5});
console.log(numbers);
console.log(removeDuplicates(numbers));

const smallerNumbers = numbers.filter(number => number < 3);
console.log(smallerNumbers);
