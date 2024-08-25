import {useState} from 'react'; 
import {
	View, 
	Text, 
	TextInput, 
	TouchableOpacity,
	StyleSheet	
} from 'react-native'; 


function TasksApp(){
   const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('error');
      return;
    }

    switch (operation) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case 'x':
        setResult(number1 * number2);
        break;
      case '/':
        setResult(number2 !== 0 ? number1 / number2 : 'error');
        break;
        case 'power':
        setResult(Math.pow(num1, num2));
        break;
      case 'sqrt':
        setResult(Math.sqrt(num1));
        break;
      default:
        setResult('error');
    }
  };

	return(
		<View style={styles.container}> 
			<Text style={styles.heading}>Calculator</Text>
			<TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => setNum1(text)}
        value={num1}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={text => setNum2(text)}
        value={num2}
      />
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('x')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('power')}>
          <Text style={styles.buttonText}>^</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('sqrt')}>
          <Text style={styles.buttonText}>√</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {result !== null ? ` ${result}` : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  heading: {
     fontSize: 24, 
     marginBottom: 10,
     fontStyle: 'bold', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TasksApp; 

