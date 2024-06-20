
import swal from "sweetalert";


export const getdonations = () => {
  let donations = []
  const storeddonations = localStorage.getItem('donations')
  if (storeddonations) {
    donations = JSON.parse(storeddonations)
  }
  return donations
}
export const savedonation = donation => {
  let donations = getdonations()
  const isExist = donations.find(b => b.id === donation.id)
  if (isExist) {
    return swal("Sorry, You have Already donated it !")
  }
  donations.push(donation)
  localStorage.setItem('donations', JSON.stringify(donations))
  swal("Thank you", "You have successfully donated", "success");
}

export const deleteDonationsFromLS = (id) => {
  const myDonations = getdonations()
  const newMyDonations = myDonations.filter((d) => d.id!== id);
  localStorage.setItem("donations", JSON.stringify(newMyDonations));
  return newMyDonations;
};