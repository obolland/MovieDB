<h4>Movie DB created in NextJS and deployed to Vercel</h4>
<a href="https://movie-db-jade.vercel.app/" target="_blank">https://movie-db-jade.vercel.app/</a>

<p>I've built this app to showcase the some of the features of the ever-evolving Next JS framework.<br>
It's features include automatic code splitting and the utilisation of Serverless side rendering (the API routes in this application where built using serverless functions).</p>

<p>This app allows the user to perform all CRUD operations against Google Firestore.<br>
Add a movie with the "Add Movie to DB" button, and delete or edit an existing movie after navigating to page of that specific movie.<p>
  
<h3>*Edit*</h3>
<p><i>It is now recommended to use <b>getStaticProps</b> or <b>getServerSideProps</b> instead of <b>getInitialProps</b>.
  A better practise would now be to use <b>getStaticProps</b> and move all API functionality (BD calls) inside of a <b>getStaticProps</b> function.</i></p>
