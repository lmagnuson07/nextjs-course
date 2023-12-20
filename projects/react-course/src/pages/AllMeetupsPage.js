import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-getting-started-d4333-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key],
          };
        });

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h2>All Meetups</h2>
      {/* This is returning an array of items, similar to this example */}
      {/*{[<li>Item1</li>, <li>Item2</li>]}*/}
      {/*{DUMMY_DATA.meetups.map((meetup) => {
        return <li key={meetup.id}>{meetup.title}</li>;
      })}*/}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
