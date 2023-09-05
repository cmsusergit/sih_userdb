const getAlpineDt = () => {
  return {
    teamdb: {},
    studentList: [
      {
        title: 'Team Leader',
        name: '',
        is_leader: true,
        email: '',
        contact: '',
        gender: 'MALE',
      },
      {
        title: 'Team Member',
        name: '',
        is_leader: false,
        email: '',
        contact: '',
        gender: 'MALE',
      },
      {
        title: 'Team Member',
        name: '',
        is_leader: false,
        email: '',
        contact: '',
        gender: 'MALE',
      },
      {
        title: 'Team Member',
        name: '',
        is_leader: false,
        email: '',
        contact: '',
        gender: 'MALE',
      },
      {
        title: 'Team Member',
        name: '',
        is_leader: false,
        email: '',
        contact: '',
        gender: 'MALE',
      },
      {
        title: 'Team Member',
        name: '',
        is_leader: false,
        email: '',
        contact: '',
        gender: 'FEMALE',
      },
    ],
  };
};

const onsubmit = async (teamdb, studentList) => {
  console.log(teamdb, studentList);
  const url =
    'https://few-cpu.pockethost.io//api/collections/SIH_STUDENT_TEAM/records';
  teamdb['team_member_list'] = studentList;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(teamdb),
  });
  try {
    const dt = await response.json();
    if (dt) {
      alert('Successfully Submitted');
      window.location.href = 'https://www.sih.gov.in/';
      return;
    }

    alert('Something Went Wrong !!!!');
    return;
  } catch (error) {
    alert('Something Went Wrong !!!!' + error);
    return;
  }
};
