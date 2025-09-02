import colors from '../../theme/colors';
import { StyleSheet } from 'react-native';

export const InventoryItem = StyleSheet.create({
  card: {
    width: '45%',
    height: '55%',
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    position: 'relative',
  },
  img: {
    width: 100,
    height: 64,
    right: 0,
    bottom: 0,
    marginBottom: 8,
    position: 'absolute',
  },
  title: {
    textAlign: 'left',
    fontWeight: '700',
    fontSize: 20,
    color: colors.text,
  },
});

export const InventoryScreenCss = StyleSheet.create({
  container: { flex: 1, padding: 5 },
  title: { fontSize: 36, fontWeight: 'bold', textAlign: 'center', marginTop:10},
  subtitle: { marginTop: 10, fontSize: 16, color: '#555' },
  customerDetailsContainer: {
    backgroundColor: '#ffffffff',
    padding: 5,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  text: { fontSize: 14, color: '#333' },
});
export const RelocRequestScreenCss = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: colors.primary,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#03B5A7',
  },
  form: {
    marginVertical: 50,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 15,
  },
  codeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginRight: 8,
  },
  codeText: {
    fontWeight: 'bold',
    color: '#333',
    
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop:10},

});
