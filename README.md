<h4>Movie DB created in NextJS and deployed to Vercel</h4>
<a href="https://movie-db-jade.vercel.app/" target="_blank">https://movie-db-jade.vercel.app/</a>

<h3>*Edit*</h3>
<p><i>With more recent updates to the NextJS framework, it is now recommended to use <b>getStaticProps</b> or <b>getServerSideProps</b> instead of <b>getInitialProps</b>.
  A better practise now then would now be to use <b>getStaticProps</b> and move all API functionality (BD calls) inside of this function.<br>
  This would eliviate the need for seperate API routes and all pages would be statically rendered <b>at build time</b>.<br>
  <b>Revalidate</b> can be utilised in order to statically regenerate the pages on the fly, so subsequent CRUD operations made against the database create changes within the app without the need to re-build the app everytime changes to data occur.</i></p>

<p>I built this app to showcase some of the features of the ever-evolving Next JS framework.<br>
It's features include automatic code splitting and the utilisation of Serverless side rendering (the API routes in this application where built using serverless functions).</p>

<p>This app allows the user to perform all CRUD operations against Google Firestore.<br>
Add a movie with the "Add Movie to DB" button, and delete or edit an existing movie after navigating to page of that specific movie.<p>
