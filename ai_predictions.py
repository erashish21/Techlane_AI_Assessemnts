import random
import json

def simulate_predictions(input_data):
    # Simulate AI prediction (0 or 1)
    prediction = random.choice([0, 1])
    # Simulate actual result (0 or 1)
    actual_result = random.choice([0, 1])
    return prediction, actual_result

# Generate mock prediction data
num_predictions = 10  # Number of predictions to generate
mock_predictions = []

for _ in range(num_predictions):
    input_data = [random.uniform(0, 1), random.uniform(0, 1), random.uniform(0, 1)]  # Generate dynamic input data
    prediction, actual_result = simulate_predictions(input_data)
    mock_prediction = {
        "input": input_data,
        "prediction": prediction,
        "actual": actual_result
    }
    mock_predictions.append(mock_prediction)

# Print the generated data as JSON
print(json.dumps(mock_predictions))
