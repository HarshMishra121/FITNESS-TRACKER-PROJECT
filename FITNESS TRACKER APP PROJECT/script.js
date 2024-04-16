let workouts = [];

function logWorkout() {
    const workoutInput = document.getElementById('workout');
    const durationInput = document.getElementById('duration');

    const workout = workoutInput.value.trim();
    const duration = parseInt(durationInput.value);

    if (workout === '' || isNaN(duration) || duration <= 0) {
        alert('Please enter valid workout and duration.');
        return;
    }

    const newWorkout = {
        workout: workout,
        duration: duration,
    };

    workouts.push(newWorkout);
    updateWorkoutList();
    updateStatistics();
    workoutInput.value = '';
    durationInput.value = '';
}

function updateWorkoutList() {
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = '';

    workouts.forEach((workout, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${workout.workout} - ${workout.duration} mins`;
        workoutList.appendChild(li);
    });
}

function updateStatistics() {
    const totalWorkouts = document.getElementById('total-workouts');
    const totalDuration = document.getElementById('total-duration');

    totalWorkouts.textContent = workouts.length;

    const durationSum = workouts.reduce((total, workout) => total + workout.duration, 0);
    totalDuration.textContent = durationSum;
}
