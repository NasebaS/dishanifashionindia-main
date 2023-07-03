import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// library.add(faCirclePlus);

const AddressScreen = () =>{
  state = {
    // Existing state variables...
    name: '',
    city: '',
    district: '',
    phone_number:'',
    locality: '',
    landmark: '',
    showForm: false, // Flag to control form visibility
  };

  // handleAddAddress = () => {
  //   this.setState({ showForm: true });
  // };

  handleFormSubmit = () => {
    // Perform form submission logic here

    // Reset form fields and hide the form
    this.setState({
      name: '',
      city: '',
      district: '',
      locality: '',
      landmark: '',
      // showForm: false,
    });
  };

  
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
    
      
          <View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>City:</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(city) => this.setState({ city })}
                value={this.state.city}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>District:</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(district) => this.setState({ district })}
                value={this.state.district}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Locality:</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(locality) => this.setState({ locality })}
                value={this.state.locality}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Landmark:</Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(landmark) => this.setState({ landmark })}
                value={this.state.landmark}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={this.handleFormSubmit}
            >
              <Text style={styles.buttonTextStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
       
      </View>
    );
  }

export default AddressScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: '#015cf9',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  // Existing styles...
});
