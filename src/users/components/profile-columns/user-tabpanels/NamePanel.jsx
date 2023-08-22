import Input from "../../../../forms/components/Input";

function NamePanel({data, error, onChange}) {

    return ( <>
                <Input
                    data={data} 
                    name={"first"}
                    error={error["first"]}
                    onChange={onChange} 
                    required={true} 
                    label={"First Name"} />
                <Input 
                    data={data} 
                    name={"middle"}
                    error={error["middle"]}
                    onChange={onChange} 
                    label={"Middle Name"} />
                <Input 
                    data={data} 
                    name={"last"}
                    error={error["last"]}
                    onChange={(e) => {onChange(e);}} 
                    required={true} 
                    label={"Last Name"} />
            </>
        
    );
}

export default NamePanel;