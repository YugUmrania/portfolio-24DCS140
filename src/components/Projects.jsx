import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import RepoList from './RepoList';

function Projects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch public repositories for the repository owner
    fetch('https://api.github.com/users/YugUmrania/repos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h2>My GitHub Projects</h2>
      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <RepoList data={data} />}
    </section>
  );
}

export default Projects;