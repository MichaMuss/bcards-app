import AvatarInput from "../../../../forms/components/AvatarInput";
import Input from "../../../../forms/components/Input";

function AvatarPanel({data,setData, error, onChange}) {
    return ( <>
                <AvatarInput name="url" label="Avatar URL" data={data} setData={setData} error={error["url"]} handleChange={onChange} /> 
                <Input 
                    data={data} 
                    name={"alt"}
                    error={error["alt"]}
                    onChange={onChange} 
                    label={"Alternative Text"} />
            </>
        
    );
}

export default AvatarPanel;