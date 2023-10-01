import time
import uinput
import RPi.GPIO as GPIO

# Set the GPIO mode
GPIO.setmode(GPIO.BCM)

# Define the button pins and corresponding keys
buttons = {
    'Q': {'pin': 26, 'key': uinput.KEY_Q},
    'W': {'pin': 5, 'key': uinput.KEY_W},
    'E': {'pin': 6, 'key': uinput.KEY_E},
    'A': {'pin': 10, 'key': uinput.KEY_A},
    'S': {'pin': 9, 'key': uinput.KEY_S},
    'D': {'pin': 11, 'key': uinput.KEY_D},
    'Z': {'pin': 13, 'key': uinput.KEY_Z},
    'X': {'pin': 16, 'key': uinput.KEY_X},
    'C': {'pin': 12, 'key': uinput.KEY_C},
    # Add more buttons here as needed
}

# Set up the button pins as input with pull-up resistor and initialize states and times
for button in buttons.values():
    GPIO.setup(button['pin'], GPIO.IN, pull_up_down=GPIO.PUD_UP)
    button['state'] = GPIO.HIGH
    button['last_time'] = time.time()

# Create a uinput device with the specified key events
device = uinput.Device([button['key'] for button in buttons.values()])

# Define debounce time in seconds
debounce_time = 0.3

try:
    while True:
        current_time = time.time()
        for button in buttons.values():
            current_state = GPIO.input(button['pin'])
            if current_state == GPIO.LOW and button['state'] == GPIO.HIGH and (current_time - button['last_time']) > debounce_time:
                device.emit_click(button['key'])
                button['last_time'] = current_time
            button['state'] = current_state
        time.sleep(0.01)
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()

