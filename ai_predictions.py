import random

def simulate_predictions(input_data):
    # Simulate AI prediction (0 or 1)
    prediction = random.choice([0, 1])
    # Simulate actual result (0 or 1)
    actual_result = random.choice([0, 1])
    return prediction, actual_result

if __name__ == '__main__':
    input_data = []  # Provide input data for predictions (if needed)
    prediction, actual_result = simulate_predictions(input_data)
    print(f"{prediction},{actual_result}")
