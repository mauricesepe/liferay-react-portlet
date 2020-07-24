import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const proxy = ""
const epgEndpoint = "https://lx46iiiidg.execute-api.ap-southeast-2.amazonaws.com/dev/epg" 
const baseUrl = proxy + epgEndpoint;
// ?dateFormat=DATETIMELOCAL&start=1572310939657&end=1572346799999&channelNumber=4

const PrimeChannelNumber = 4; 

const http = axios.create({
	baseURL: '/',
	// Disabled caching for poc purposes
	// adapter: cacheAdapterEnhancer(axios.defaults.adapter)
});

const getPrimeEvents = async (startDate, endDate) => { 
  const params =  { 
    start: startDate,
    end: endDate,
    channelNumber: PrimeChannelNumber
  }
  const response = await http.get(baseUrl, {params,});
  const events = !!response && !!response.data && response.data.events;
  return events ? events.filter(event => event.start > startDate) : events;
}

export default {
  getPrimeEvents
};
