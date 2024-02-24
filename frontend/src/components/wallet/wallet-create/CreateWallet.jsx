const CreateWallet = () => {

    const handleCreateWallet = (e) => {
        e.preventDefault();
    }
    return ( 
        <div className="createWallet-form">
            <h3 className="title"> CREATE WALLET </h3>
            <form onSubmit={handleCreateWallet}>
                Name <br />
                <input type="text" /><br />
                Date of birth <br />
                <input type="text" /><br />
                Nationality <br />
                <input type="text" /><br />
                Work <br />
                <input type="text" /><br />
                Account Balance <br />
                <input type="text" /><br />
                Password <br />
                <input type="text" /><br /><br />

                <button>Create Wallet</button>

            </form>
        </div>
    );
}
 
export default CreateWallet;